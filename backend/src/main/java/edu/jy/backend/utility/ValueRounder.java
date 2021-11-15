package edu.jy.backend.utility;

/**
 * This rounds a double value.
 *
 * @author Jacob Yousif
 * @version 1
 */
public class ValueRounder {

    /**
     * A private constructor: to prevent creating instances.
     */
    private ValueRounder() {

    }

    /**
     * It rounds the value.
     *
     * @param val the value.
     * @return double
     */
    public static double round(double val) {
        val = val * 100;
        val = ((int) val);
        return val / 100;
    }
}
