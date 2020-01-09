module.exports.run = function() {

    //Complete all problems below.
    //Once done run all problems from here


    //OUTPUT DUPLICATE NUMBERS
    console.log("\n\n-----QUESTION_FINDDUPLICATES-----\n\n");
    console.log(findDuplicates());

    //OUTPUT TWO INDICES
    console.log("\n\n-----QUESTION_TWOSUM-----\n\n");
    console.log(twoSum());


    //OUTPUT THE PROVIDERS
    console.log("\n\n-----QUESTION_CHAINS-----\n\n");
    console.log(findChains());
}

//Instructions:
//  Given an array of integers, return an array of all numbers appearing more than once.
//  Only output duplicates one time.  A sample input array is provided, but your code should
//  perform for any array of any number of integers.

//  Do NOT modify the default values below
function findDuplicates(inputArray = [1, 5, 3, 2, 6, 8, 9, 10, 1, 5, 8, 9, 3, 10, 45, 32, 16, 14, 3, 5, 9]) {

    //YOUR CODE HERE

}

//Instructions:
//  Given an array of integers, return an array of the array indices of two numbers that add up
//  to the provided target.
//  Return only ONE solution.  You may not use the same index twice.  A sample array is provided,
//  but code should perform for any array of any number of integers.

//  Do NOT modify the default values below
function twoSum(inputArray = [1, 5, 2, 0, 4, 11, 9, 6, 12, 7], targetValue = 9) {

    //YOUR CODE HERE

}

//Instructions:
//  The NPI registry has an open API to find healthcare provider organizations.
//  https://npiregistry.cms.hhs.gov/registry/help-api
//
//  Given a zip code, get the first 10 providers for that zip code, and determine if any of those
//  providers are have multiple locations by searching the NPI registry with the organization
//  name. Return a comma delimited string of provider names that result in multiple locations.
//
//  Get up to 10 organizational providers by zip code:
//  https://npiregistry.cms.hhs.gov/api/?version=2.1&postal_code=97005&enumeration_type=NPI-2
//
//  Get up to 10 providers by organization name:
//  https://npiregistry.cms.hhs.gov/api/?version=2.1&enumeration_type=NPI-2&organization_name=THERAPEUTIC%20ASSOCIATES%20INC
function findChains(zipCode = "97005") {

    //YOUR CODE HERE

}
