import {types} from '../../Auth/Types/types.js'
describe('Types Test', () => {
    test('Should return defoult types', () => {
        console.log(types)
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })
})