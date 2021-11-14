package edu.jy.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * This is for the main entry point to the backend application.
 *
 * @author Jacob Yousif
 * @version 1
 */
@SpringBootApplication
public class BackendApplication {

    /**
     * The main entry point.
     * It invokes the run method.
     *
     * @param args the arguments; in this context is none.
     */
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}
