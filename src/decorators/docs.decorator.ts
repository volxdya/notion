import { applyDecorators, Type } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

interface IDocsParams {
    summary?: string,
    status?: number,
    description?: string,
    isArray?: boolean,
    type?: Type<unknown> | Function | [Function] | string
}

export function Docs(params: IDocsParams) {
    const { summary, status, description, isArray, type } = params;

    return applyDecorators(
        ApiOperation({ summary }),
        ApiResponse({ status, description, isArray, type })
    );
}