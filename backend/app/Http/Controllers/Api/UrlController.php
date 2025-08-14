<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UrlController extends Controller
{
    /**
     * Generate a short URL.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function shorten(Request $request)
    {
        $request->validate([
            'original_url' => 'required|url',
        ]);

        $originalUrl = $request->input('original_url');
        $existingUrl = Url::where('original_url', $originalUrl)->first();

        if ($existingUrl) {
            return response()->json([
                'short_url' => url($existingUrl->short_code),
            ], 200);
        }

        $shortCode = Str::random(6);
        while (Url::where('short_code', $shortCode)->exists()) {
            $shortCode = Str::random(6);
        }

        $url = Url::create([
            'original_url' => $originalUrl,
            'short_code' => $shortCode,
            'clicks' => 0,
        ]);

        return response()->json([
            'short_url' => url($url->short_code),
        ], 201);
    }

    /**
     * Redirect to the original URL.
     *
     * @param string $shortCode
     * @return \Illuminate\Http\RedirectResponse
     */
    public function redirect($shortCode)
    {
        $url = Url::where('short_code', $shortCode)->firstOrFail();
        $url->increment('clicks');
        return redirect($url->original_url);
    }

    /**
     * Get URL history.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function history()
    {
        $urls = Url::select('original_url', 'short_code', 'clicks', 'created_at')->get();
        return response()->json($urls, 200);
    }
}