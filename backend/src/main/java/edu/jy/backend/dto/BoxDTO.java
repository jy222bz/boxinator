package edu.jy.backend.dto;

/**
 * The Box class is representing the Data Transfer Object (DTO).
 * The purpose of this object is to allow smooth transfer between the backend and the frontend.
 * It reduces the amount of data that needs to be sent across the wire in distributed applications.
 *
 * @author Jacob Yousif
 * @version 1
 */
@DTO
public class BoxDTO {

    /**
     * A private field for the weight of the box.
     */
    private double weight;

    /**
     * A private field for the name of the receiver.
     */
    private String name;

    /**
     * A private field for the color of the box.
     */
    private String color;

    /**
     * A private field for the receiving country of the box.
     */
    private String country;

    /**
     * A private field for the id of the box.
     */
    private int id;

    /**
     * A private field for the cost of the box.
     */
    private double cost;

    /**
     * A public constructor; without parameters.
     */
    public BoxDTO() {

    }

    /**
     * A public constructor.
     *
     * @param id      the id of the box.
     * @param weight  the weight of the box.
     * @param name    the name of the receiver.
     * @param color   the color of the box.
     * @param country the receiving country.
     * @param cost    the shipping cost.
     */
    public BoxDTO(Integer id, double weight, String name, String color, String country, double cost) {
        this.weight = weight;
        this.name = name;
        this.color = color;
        this.country = country;
        this.id = id;
        this.cost = cost;
    }

    /**
     * A public constructor.
     *
     * @param weight  the weight of the box.
     * @param name    the name of the receiver.
     * @param color   the color of the box.
     * @param country the receiving country.
     */
    public BoxDTO(double weight, String name, String color, String country) {
        this.weight = weight;
        this.name = name;
        this.color = color;
        this.country = country;
    }

    /**
     * It returns the id.
     *
     * @return int
     */
    public int getId() {
        return id;
    }

    /**
     * It returns the weight.
     *
     * @return double
     */
    public double getWeight() {
        return weight;
    }

    /**
     * It returns the cost.
     *
     * @return double
     */
    public double getCost() {
        return cost;
    }

    /**
     * It returns the name.
     *
     * @return String
     */
    public String getName() {
        return name;
    }

    /**
     * It returns the color.
     *
     * @return String
     */
    public String getColor() {
        return color;
    }

    /**
     * It returns the country.
     *
     * @return String
     */
    public String getCountry() {
        return country;
    }
}

