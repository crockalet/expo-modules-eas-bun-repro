import { registerWebModule, NativeModule } from 'expo';

import { TestModuleEvents } from './TestModule.types';

class TestModule extends NativeModule<TestModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(TestModule, 'TestModule');
