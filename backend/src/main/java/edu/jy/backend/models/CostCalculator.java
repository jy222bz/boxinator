package edu.jy.backend.models;

import edu.jy.backend.exceptions.BaseException;
import edu.jy.backend.exceptions.Classification;
import edu.jy.backend.data.CountryMultiplier;
import edu.jy.backend.utility.ValueRounder;
import org.springframework.stereotype.Component;

/**
 * The Cost Calculator class is responsible for computing the shipping cost of the box
 * according to the country multiplier and the weight.
 * <p>
 * This class is tested with jUnit and the coverage is 100%. To see the results,
 * see Ref: Test Results - CostCalculatorTests.html.
 *
 * @author Jacob Yousif
 * @version 1
 */
@Component
public class CostCalculator {

    /**
     * It computes the shipping cost of the box according to the weight and the country multiplier.
     *
     * @param country the receiving country.
     * @param weight  the weight of the box.
     * @return int the cost.
     * @throws BaseException it throws Exception when the provided data is invalid.
     */
    public double getCost(String country, double weight) throws BaseException {
        if (weight <= 0) {
            throw new BaseException(Classification.INVALID_UNIT);
        }
        if (CountryMultiplier.SWEDEN.getCountry().equalsIgnoreCase(country)) {
            return ValueRounder.round(weight * CountryMultiplier.SWEDEN.getMultiplier());
        } else if (CountryMultiplier.CHINA.getCountry().equalsIgnoreCase(country)) {
            return ValueRounder.round(weight * CountryMultiplier.CHINA.getMultiplier());
        } else if (CountryMultiplier.AUSTRALIA.getCountry().equalsIgnoreCase(country)) {
            return ValueRounder.round(weight * CountryMultiplier.AUSTRALIA.getMultiplier());
        } else if (CountryMultiplier.BRAZIL.getCountry().equalsIgnoreCase(country)) {
            return ValueRounder.round(weight * CountryMultiplier.BRAZIL.getMultiplier());
        } else {
            throw new BaseException(Classification.INVALID_DATA);
        }
    }
}
