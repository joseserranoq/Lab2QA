import { Account } from './account';
import { AccountRepository } from './account-repository';
import { Rol } from './rol';
export class SpyAccountRepository implements AccountRepository {
    saveWasInvoked: boolean;
    constructor() {
        this.saveWasInvoked = false;
    }
    getLista(): Account[] {
        throw new Error('Method not implemented.');
    }
    save(cuenta: Account): void {
        throw new Error('Method not implemented.');
    }
    getListaConnects(): Account[] {
        throw new Error('Method not implemented.');
    }
    setListaConnects(cuenta: Account): void {
        throw new Error('Method not implemented.');
    }
    findAccount(email: string): Account {
        this.saveWasInvoked = true;
        return new Account(); //se retorno para evitar el throw
    }
    findRol(cuenta: Account): Rol {
        throw new Error('Method not implemented.');
    }
    isBloqueado(cuenta: Account): boolean {
        throw new Error('Method not implemented.');
    }
    remove(cuenta: Account): void {
        
    }
    wasSaveInvoke(): boolean {
        return this.saveWasInvoked;
    }
}
