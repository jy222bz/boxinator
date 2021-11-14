package edu.jy.backend.models;

/**
 * This class holds information related to the summary; total cost and the total shipping weight.
 *
 * @author Jacob Yousif
 * @version 1
 */
public class Summary {

    /**
     * A private field for the total weight.
     */
    private double totalWeight;

    /**
     * A private field for the total cost.
     */
    private double totalCost;

    /**
     * A public constructor.
     *
     * @param totalCost   the total cost.
     * @param totalWeight the total weight.
     */
    public Summary(double totalCost, double totalWeight) {
        this.totalCost = totalCost;
        this.totalWeight = totalWeight;
    }

    /**
     * A public constructor.
     */
    Summary() {

    }

    /**
     * It sets the total cost.
     *
     * @param totalCost double
     */
    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    /**
     * It sets the total weight.
     *
     * @param totalWeight double
     */
    public void setTotalWeight(double totalWeight) {
        this.totalWeight = totalWeight;
    }

    /**
     * It returns the total cost.
     *
     * @return double
     */
    public double getTotalCost() {
        return totalCost;
    }

    /**
     * It returns the total weight.
     *
     * @return double
     */
    public double getTotalWeight() {
        return totalWeight;
    }
}
