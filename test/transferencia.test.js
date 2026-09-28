const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () => {
    let token;
        
    beforeEach(async () => {
        token = await obterToken('julio.lima', '123456');
    })

    describe('POST /transferencias', () => {

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$10', async () => {
            const bodyTransferencias = { ...postTransferencias, token: token };

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencias);
            expect(resposta.status).to.equal(201);
        });

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$10', async () => {
            const bodyTransferencias = { ...postTransferencias, token: token };
            bodyTransferencias.valor = 7; // Valor abaixo de R$      10

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);
            expect(resposta.status).to.equal(422);
        });
    });

    describe('GET /transferencias/{id}', () => {
        
        it('Deve retornar sucesso com 200 e dados iguais ao registo de transferencia contino no banco de dados quando o ID for válido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/9')
                .set('Authorization', `Bearer ${token}`);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.equal(9);
            expect(resposta.body.id).to.be.a('number');
            expect(resposta.body.conta_origem_id).to.equal(1);
            expect(resposta.body.conta_destino_id).to.equal(2);
            expect(resposta.body.valor).to.equal(11.00);
        });
    });

    describe('GET /transferencias', async () => {
        it('Deve retornar 10 elementos na paginação quando informar 10 registos', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.limit).to.equal(10);
            expect(resposta.body.transferencias).to.have.lengthOf(10);
        });
    });    
});