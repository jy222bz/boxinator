package edu.jy.backend.services;

import edu.jy.backend.models.Box;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import edu.jy.backend.repositories.BoxRepository;

import java.util.List;

/**
 * This is a service class.
 *
 * @author Jacob Yousif
 * @version 1
 */
@Service
public class BoxServiceClass implements BoxService {

    /**
     * A private field for the box repository.
     */
    @Autowired
    private BoxRepository boxRepository;

    /**
     * It inserts the provided box into the repository.
     *
     * @param box Box.
     */
    @Override
    public void saveBox(Box box) {
        boxRepository.save(box);
    }

    /**
     * It retrieves all boxes from the repository.
     *
     * @return List<Box>
     */
    @Override
    public List<Box> getAll() {
        return boxRepository.findAll();
    }
}
