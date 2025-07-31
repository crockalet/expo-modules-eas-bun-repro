// Reexport the native module. On web, it will be resolved to TestModule.web.ts
// and on native platforms to TestModule.ts
export { default } from './TestModule';
export { default as TestModuleView } from './TestModuleView';
export * from './TestModule.types';
//# sourceMappingURL=index.js.map