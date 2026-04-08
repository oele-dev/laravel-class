<?php

namespace App\Enums;

enum UnitOfMeasure: string
{
    case KG = 'kg';
    case LITER = 'liter';
    case PIECE = 'piece';
    case BOX = 'box';
    case PACK = 'pack';
    case DOZEN = 'dozen';

    public function label(): string
    {
        return match($this) {
            self::KG => 'Kilogram',
            self::LITER => 'Liter',
            self::PIECE => 'Piece',
            self::BOX => 'Box',
            self::PACK => 'Pack',
            self::DOZEN => 'Dozen',
        };
    }
}