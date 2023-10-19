import { StubAccountRepository } from './stub-account-repository';

describe('StubAccountRepository', () => {
  it('should create an instance', () => {
    expect(new StubAccountRepository()).toBeTruthy();
  });
});
