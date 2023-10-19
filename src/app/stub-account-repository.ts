import { Account } from './account';
import { AccountRepository } from "./account-repository";
import { Rol } from "./rol";

export class StubAccountRepository implements AccountRepository{
    account: Account[] = [];
    getLista(): Account[] {
        
        return this.account; //se retorna una lista 
    }
    save(cuenta: Account): void {
        this.account = [...this.account, cuenta]
    }
    getListaConnects(): Account[] {
        throw new Error("Method not implemented.");
    }
    setListaConnects(cuenta: Account): void {
        return ; //se retorna vacio
    }
    findAccount(email: string): Account {
        throw new Error("Method not implemented.");
    }
    findRol(cuenta: Account): Rol {
        throw new Error("Method not implemented.");
    }
    isBloqueado(cuenta: Account): boolean {
        return false; //se retorna un boolean
    }
    remove(cuenta: Account): void {
        throw new Error("Method not implemented.");
    }

}
