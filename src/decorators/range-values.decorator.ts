import { applyDecorators } from '@nestjs/common';
import { Max, Min } from 'class-validator';

interface IDocsParams {
    max: number;
    min?: number; // default value = 1
}

export function RangeValues(params: IDocsParams) {
    const { max, min } = params;

    return applyDecorators(
        Min(min ? min : 1),
        Max(max)
    );
}