import { NativeModule } from 'expo';
import { TestModuleEvents } from './TestModule.types';
declare class TestModule extends NativeModule<TestModuleEvents> {
    PI: number;
    hello(): string;
    setValueAsync(value: string): Promise<void>;
}
declare const _default: TestModule;
export default _default;
//# sourceMappingURL=TestModule.d.ts.map