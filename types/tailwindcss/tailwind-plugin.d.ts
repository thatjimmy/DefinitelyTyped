// Type definitions for tailwindcss 2.2
// Project: https://github.com/tailwindlabs/tailwindcss
// Definitions by: Lukasz Wieczynski <https://github.com/f2x058>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

export type SelectorModifier = (helpers: { selector: string, className: string }) => string
export function modifySelectors(modifier: SelectorModifier): void;

export type VariantGenerator = (helpers: { modifySelectors: typeof modifySelectors, separator: string, container: any }) => void;
export function addVariant(name: string, generator?: VariantGenerator): void;

export function addBase(base: object): void;

type UtilitiesOptions = Array<string> | {
    variants: Array<string>,
    respectPrefix: boolean;
    respectVariants: boolean;
    respectImportant: boolean;
}
export function addUtilities(uilities: object, options: any): void;

type ComponentsOptions = UtilitiesOptions;
export function addComponents(components: object, options: any): void;

export function e(className: string): string;
export function theme(themePath: string, defaultTheme?: object): object | string;
export function config(configPath: string): object | string;

interface PluginHelpers {
    addBase?: typeof addBase;
    addVariant?: typeof addVariant;
    addUtilities?: typeof addUtilities;
    addComponents?: typeof addComponents;
    e?: typeof e;
    theme?: typeof theme;
    config?: typeof config;
}
export interface PluginFunction {
    (helpes: PluginHelpers): void
}
export type Plugin = PluginFunction;