const { expect } = require("chai");
const { getConfig } = require("../../src/utils/get-config");

describe("get-config", () => {
  it("should get config", () => {
    const config = getConfig();

    expect(Object.keys(config))
      .to.be.an("array")
      .that.include("narakeetApiKey");

    expect(typeof config.narakeetApiKey).to.equal("string");
  });
});
