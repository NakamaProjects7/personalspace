{{--
    Button Component
    Usage: @include('components.button', ['text' => 'Click Me', 'url' => '/link', 'variant' => 'primary'])
--}}

@php
    $variant = $variant ?? 'primary';
    $size = $size ?? '';
    $type = $type ?? 'link';
    
    $classes = 'btn btn-' . $variant;
    if ($size) {
        $classes .= ' btn-' . $size;
    }
    if (isset($class)) {
        $classes .= ' ' . $class;
    }
@endphp

@if($type === 'button')
    <button type="{{ $buttonType ?? 'button' }}" class="{{ $classes }}">
        {{ $text ?? $slot }}
    </button>
@else
    <a href="{{ $url ?? '#' }}" class="{{ $classes }}">
        {{ $text ?? $slot }}
    </a>
@endif
