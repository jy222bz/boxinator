package edu.jy.backend.dto;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * The DTO interface is for the BoxDTO; which will be a Data Transfer Object.
 *
 * @author Jacob Yousif
 * @version 1
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DTO {
}
