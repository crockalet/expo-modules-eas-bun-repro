import { registerWebModule, NativeModule } from 'expo';
class TestModule extends NativeModule {
    PI = Math.PI;
    async setValueAsync(value) {
        this.emit('onChange', { value });
    }
    hello() {
        return 'Hello world! 👋';
    }
}
export default registerWebModule(TestModule, 'TestModule');
//# sourceMappingURL=TestModule.web.js.map