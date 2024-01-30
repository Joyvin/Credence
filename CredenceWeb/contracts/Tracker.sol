//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

contract Tracker {
    struct Status {
        string name;
        string desc;
        string lat;
        string long;
    }

    mapping(string => Status[]) public Journey;
    string[] public products;

    function addStatus(
        string memory name,
        string memory desc,
        string memory lat,
        string memory long
    ) public {
        if (bytes(name)[0] == "p") {
            products.push(name);
        }

        uint256 length = products.length;
        for (uint256 i = 0; i < length; i++) {
            string memory key = products[i];
            Journey[key].push(Status(name, desc, lat, long));
        }
    }

    function track(
        string memory productID
    ) public view returns (Status[] memory) {
        return Journey[productID];
    }
}
