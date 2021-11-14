package edu.jy.backend.models;

import javax.persistence.*;

/**
 * This class represents the Box entity.
 *
 * @author Jacob Yousif
 * @version 1
 */
@Entity
@Table
public class Box {

    /**
     * A private field for the weight of the box.
     */
    @Column
    private double weight;

    /**
     * A private field for the name of the receiver.
     */
    @Column
    private String name;

    /**
     * A private field for the color of the box.
     */
    @Column
    private String color;

    /**
     * A private field for the receiving country of the box.
     */
    @Column
    private String country;

    /**
     * A private field for the cost shipping of the box.
     */
    @Column
    private double cost;

    /**
     * A private field for the id of the box.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    /**
     * A public constructor.
     *
     * @param id      the id.
     * @param weight  the weight.
     * @param name    the receiver name.
     * @param color   the color.
     * @param country the receiving country.
     */
    public Box(Integer id, double weight, String name, String color, String country) {
        this.weight = weight;
        this.name = name;
        this.color = color;
        this.country = country;
        this.id = id;
    }

    /**
     * A public constructor.
     *
     * @param weight  the weight.
     * @param name    the receiver name.
     * @param color   the color.
     * @param country the receiving country.
     */
    public Box(double weight, String name, String color, String country) {
        this.weight = weight;
        this.name = name;
        this.color = color;
        this.country = country;
    }

    /**
     * A public constructor.
     */
    public Box() {

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

    /**
     * It returns the cost.
     *
     * @return double
     */
    public double getCost() {
        return cost;
    }

    /**
     * It sets the cost.
     *
     * @param cost the cost of the shipping.
     */
    public void setCost(double cost) {
        this.cost = cost;
    }

    /**
     * It sets the weight.
     *
     * @param weight the weight of the box.
     */
    public void setWeight(double weight) {
        this.weight = weight;
    }

    /**
     * It sets the receiver name.
     *
     * @param name the name of the receiver of the box.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * It sets the color.
     *
     * @param color the color of the box.
     */
    public void setColor(String color) {
        this.color = color;
    }

    /**
     * It sets the country.
     *
     * @param country the receiving country of the box.
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * It sets the id of the box.
     *
     * @param id the id of the box.
     */
    public void setId(int id) {
        this.id = id;
    }
}
