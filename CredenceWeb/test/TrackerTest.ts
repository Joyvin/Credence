import { ethers } from "hardhat";

describe("TrackerTest", () => {
	it("adds a status", async () => {
		const instance = await ethers.deployContract("Tracker");
		const name = "name";
		const desc = "description";
		const lat = "19.211344591680334";
		const long = "72.83908768853178";

		await instance.addStatus("1", name, desc, lat, long);

		const journey = await instance.track("1");
		console.log(journey);
	});
});
