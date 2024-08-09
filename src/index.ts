import postcss from 'postcss';
import tailwind, { type Config as TailwindConfig } from 'tailwindcss';

export function createTailwind(config: TailwindConfig) {
    return function process(content: string) {
        const processor = postcss().use(
            tailwind({
                ...config,
                content: [{ raw: content, extension: 'html' }],
            }),
        );
        return processor.process('@tailwind utilities', { from: undefined });
    };
}
