import { NativeModule } from 'expo';
import { TestModuleEvents } from './TestModule.types';
declare class TestModule extends NativeModule<TestModuleEvents> {
    PI: number;
    setValueAsync(value: string): Promise<void>;
    hello(): string;
}
declare const _default: typeof TestModule;
export default _default;
//# sourceMappingURL=TestModule.web.d.ts.map