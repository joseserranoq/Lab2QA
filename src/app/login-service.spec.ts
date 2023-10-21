import { Account } from './account';
import { SpyAccountRepository } from './spy-account-repository';
import { LoginService } from './login-service';
import { AccountRepository } from './account-repository';
import { mock, when, instance, verify } from 'ts-mockito';
import { StubAccountRepository } from './stub-account-repository';
import { FakeAccountRepository } from './fake-account-repository';
describe('Login Service', () => {
  var account: any;
  let email: any;
  let user: any;
  let password: any;
  beforeEach(() => {
    email = "luzclarams01@gmail.com";
    user = "LuzClara30";
    password = "Mm12345678910";
    account = new Account();
  });
  //Prueba 1: Doble de prueba Spy account-repository con el método isConnect en login service
  // objetivo: Verificar que se llame al método findAccount de la clase SpyAccountRepository
  // Datos de prueba: email = "luzclarams01@gmail.com"
  //Resultado esperado: que la función wasSaveInvoke devuelva true.
  it('Spyaccount-repository with isConnect in login service', () => {
    var spyAccountRepository = new SpyAccountRepository();
    account.setEmail(email);
    var loginService = new LoginService(spyAccountRepository);
    loginService.isConnect(email);
    expect(spyAccountRepository.wasSaveInvoke()).toBe(true);
  });
  //Prueba 2: Doble de prueba Mock account-repository con el método disconnect en login service
  // objetivo: Verificar que el método disconnect de la clase LoginService remueva al usuario de la lista de conectados
  //al retornar true se verifica su correcto funcionamiento.
  // Datos de prueba: user = "LuzClara30"
  //Resultado esperado: que la función desconnect devuelva true.
  it('Mock with desconnect in login service', () => {
    let MockedAccountRepository = mock<AccountRepository>();
    let accountRepository = instance(MockedAccountRepository);
    let loginService = new LoginService(accountRepository);
    account.setUser(user);
    when(MockedAccountRepository.getListaConnects()).thenReturn([account]);
    when(MockedAccountRepository.remove(account)).thenReturn();
    expect(loginService.desconnect(user)).toBe(true);
  });
  //Prueba 3: Stub de prueba con connect en login service
  // objetivo: Verificar que el método connect de la clase LoginService conecte al usuario
  //al retornar true se verifica su correcto funcionamiento.
  //Datos de prueba: user = "LuzClara30", password = "Mm12345678910"
  //Resultado esperado: que la función connect devuelva true.
  it('Stub with connect in login service', () => {
    var stubAccountRepository = new StubAccountRepository();
    var loginService = new LoginService(stubAccountRepository);
    account.setUser(user);
    account.setPassword(password);
    stubAccountRepository.save(account);
    expect(loginService.connect(user, password)).toBe(true);
  });
  //Prueba 4: Fake de prueba con isConnect en login service
  // objetivo: Verificar que el método isConnect de la clase LoginService verifique que el usuario esta conectado
  //al retornar true se verifica su correcto funcionamiento.
  //Datos de prueba: email = "luzclarams01@gmail.com"
  //Resultado esperado: que la función isConnect devuelva true.
  it('Fake with isConnect in login service', () => {
    var fakeAccountRepository = new FakeAccountRepository();
    var loginService = new LoginService(fakeAccountRepository);
    account.setEmail(email);
    fakeAccountRepository.save(account);
    expect(loginService.isConnect(email)).toBe(true);
  });
  afterEach(() => {
    account = null;
    email = null;
    user = null;
    password = null;
  });
});