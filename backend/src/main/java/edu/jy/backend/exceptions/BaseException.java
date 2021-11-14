package edu.jy.backend.exceptions;

/**
 * A Base Exception class.
 *
 * @author Jacob Yousif
 * @version 1
 */
public class BaseException extends Exception {

    /**
     * The classification of the exception.
     */
    private final Classification classification;

    /**
     * A public constructor.
     *
     * @param classification the classification of the exception.
     */
    public BaseException(Classification classification) {
        super(classification.getDesc());
        this.classification = classification;
    }

    /**
     * It returns the error message of the exception.
     *
     * @return String
     */
    @Override
    public String getMessage() {
        return classification.getDesc();
    }

    /**
     * It returns the code of the exception.
     *
     * @return int
     */
    public int getCode() {
        return classification.getCode();
    }
}
