import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';

describe('EnsureModuleLoadedOnceGuard', () => {
  it('should create an instance', () => {
    expect(new EnsureModuleLoadedOnceGuard()).toBeTruthy();
  });
});
