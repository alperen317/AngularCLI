import { NamePipePipe } from "./name-pipe.pipe";

describe('Name Pipe ', () => {
    it('Ali Alperen ASLAN => AAA', () => {
        let pipe = new NamePipePipe();

        expect(pipe.transform('Ali Alperen ASLAN')).toEqual('AAA');
    });
});
