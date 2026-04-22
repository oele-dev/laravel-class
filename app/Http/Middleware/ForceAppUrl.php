<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ForceAppUrl
{
    public function handle(Request $request, Closure $next)
    {
        $appUrl = config('app.asset_url') ?: config('app.url');
        if ($appUrl) {
            $parsed = parse_url($appUrl);
            if (isset($parsed['host'])) {
                $request->server->set('HTTP_HOST', $parsed['host']);
                $request->headers->set('host', $parsed['host']);
            }
            if (isset($parsed['scheme'])) {
                $request->server->set('HTTPS', $parsed['scheme'] === 'https' ? 'on' : 'off');
            }
        }
        return $next($request);
    }
}
