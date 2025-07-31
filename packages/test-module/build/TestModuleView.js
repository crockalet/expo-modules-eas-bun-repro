import { requireNativeView } from 'expo';
import * as React from 'react';
const NativeView = requireNativeView('TestModule');
export default function TestModuleView(props) {
    return <NativeView {...props}/>;
}
//# sourceMappingURL=TestModuleView.js.map