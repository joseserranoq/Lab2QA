import { Account } from './account';
import { SpyAccountRepository } from './spy-account-repository';
import { LoginService } from './login-service';
import { AccountRepository } from './account-repository';
import { mock, when, instance, verify } from 'ts-mockito';
describe('Login Service', () => {
  var account: any;
  let email: any;
  let user: any;
  let password: any;
  let fullname: any;
  let rol: null;
  let intentosFallidos: any;
  let bloqueado: any;
  beforeEach(() => {
    email = "luzclarams01@gmail.com";
    user = "LuzClara30";
    password = "12345678";
    fullname = "Luz Clara Mora Salazar";
    rol = null;
    intentosFallidos = 0;
    bloqueado = false;
    account = new Account();
  });
  //Prueba 1: Doble de prueba Spy account-repository con el método isConnect en login service
  // objetivo: Verificar que se llame al método findAccount de la clase SpyAccountRepository
  // Datos de prueba: email = "luzclarams01@gmail.com"
  //Resultado esperado: que la función wasSavwInovke devuelva true.
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
    account.setUser(user!);
    when(MockedAccountRepository.getListaConnects()).thenReturn([account]);
    when(MockedAccountRepository.remove(account)).thenReturn();
    expect(loginService.desconnect(user!)).toBe(true);
  });

  afterEach(() => {
    account = null;
    email = null;
    user = null;
    password = null;
    fullname = null;
    rol = null;
    intentosFallidos = null;
    bloqueado = null;
  });
});