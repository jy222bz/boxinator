package edu.jy.backend.repositories;


import edu.jy.backend.models.Box;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * A repository interface for the Box.
 *
 * @author Jacob Yousif
 * @version 1
 */
@Repository
public interface BoxRepository extends JpaRepository<Box, Integer> {

}
