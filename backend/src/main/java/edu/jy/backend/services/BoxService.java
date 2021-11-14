package edu.jy.backend.services;

import edu.jy.backend.models.Box;

import java.util.List;

/**
 * An interface for the BoxService.
 *
 * @author Jacob Yousif
 * @version 1
 */
public interface BoxService {

    /**
     * It inserts the provided box into the repository.
     *
     * @param box Box.
     */
    void saveBox(Box box);

    /**
     * It retrieves all boxes from the repository.
     *
     * @return List<Box>
     */
    List<Box> getAll();
}
