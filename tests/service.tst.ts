import { expect } from 'chai';
import { validateJwt } from "../src/helpers/jwt"

describe('verify api token', function() {
    it('jwt', function() {
        let response = validateJwt("")
        expect(response).equal(null);
        
    }); 
});