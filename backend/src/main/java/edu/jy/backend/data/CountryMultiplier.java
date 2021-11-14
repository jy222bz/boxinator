package edu.jy.backend.data;

/**
 * An enum class for the countries and their corresponding multipliers.
 *
 * @author Jacob Yousif
 * @version 1
 */
public enum CountryMultiplier {

    SWEDEN("Sweden", 1.3),
    CHINA("China", 4),
    BRAZIL("Brazil", 8.6),
    AUSTRALIA("Australia", 7.2);

    /**
     * A private field for the country.
     */
    private final String country;

    /**
     * A private field for the multiplier.
     */
    private final double multiplier;

    /**
     * A public constructor.
     *
     * @param country    the country.
     * @param multiplier the mutiplier.
     */
    CountryMultiplier(String country, double multiplier) {
        this.country = country;
        this.multiplier = multiplier;
    }

    /**
     * It returns the country.
     *
     * @return String
     */
    public String getCountry() {
        return country;
    }

    /**
     * It returns the multiplier.
     *
     * @return double
     */
    public double getMultiplier() {
        return multiplier;
    }
}
