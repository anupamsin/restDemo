interface Find<T> {
    cal() : void;
}

class A1 implements Find<string> {
    cal(): void {
        console.log("Hi");
    }
}

class A2 implements Find<number> {
    cal(): number {
        return 12;
    }
}

class A3 implements Find<boolean> {
    cal(): boolean {
        return true;
    }
}