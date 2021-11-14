package edu.jy.backend.exceptions;

/**
 * An enum class for the classifications of the Exceptions.
 *
 * @author Jacob Yousif
 * @version 1
 */
public enum Classification {

    INVALID_DATA("The information was provided are NOT VALID!", 101),
    INVALID_UNIT("The weight should be possitive; greater than ZERO!", 102);

    /**
     * A private field for the error description of the exception.
     */
    private final String desc;

    /**
     * A private field for the code of the exception.
     */
    private final int code;

    /**
     * A public constructor.
     *
     * @param desc the descritiopn.
     * @param code the code.
     */
    Classification(String desc, int code) {
        this.desc = desc;
        this.code = code;
    }

    /**
     * It returns the description.
     *
     * @return String
     */
    public String getDesc() {
        return desc;
    }

    /**
     * It returns the code.
     *
     * @return int
     */
    public int getCode() {
        return code;
    }
}
