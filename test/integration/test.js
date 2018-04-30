const chai = require('chai');
const axios = require('axios');

const expect = chai.expect;

describe(' 1 + 1 ', function () {
  it('should equal 2', () => {
    const number = 1 + 1;
    expect(number).to.equal(2);
  });
});

describe('testing...', function () {
  it('should get api route /api/get', async () => {
    const response = await axios.get('http://localhost:5000/api/get');
    console.log(response);

    expect(response.status).to.equal(200);
    expect(response.data).to.equal('success');
  });
});