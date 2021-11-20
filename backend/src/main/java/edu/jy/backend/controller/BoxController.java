package edu.jy.backend.controller;

import edu.jy.backend.dto.BoxDTO;
import edu.jy.backend.data.StaticData;
import edu.jy.backend.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.jy.backend.services.BoxService;

import java.util.List;

/**
 * The BoxController class is a REST api controller and its methods are responsible for
 * handling the REST requests and the responses.
 *
 * @author Jacob Yousif
 * @version 1
 */
@CrossOrigin(origins = StaticData.LOCALHOST)
@RestController
public class BoxController {

    /**
     * A private field for the box service object.
     */
    @Autowired
    private BoxService boxService;

    /**
     * A private field for the model mapper object.
     */
    @Autowired
    ModelMapper modelMapper;

    /**
     * A private field for the cost calculator object.
     */
    @Autowired
    CostCalculator costCalculator;

    /**
     * A private field for the summary handler object.
     */
    @Autowired
    SummaryHandler summaryHandler;

    /**
     * It handles the POST requests and inserts the input into the database.
     *
     * @param dto the BoxDto object.
     * @return String
     */
    @PostMapping(StaticData.ADD_PATH)
    public String insert(@RequestBody BoxDTO dto) {
        try {
            Box box = modelMapper.dtoToEntity(dto);
            box.setCost(costCalculator.getCost(box.getCountry(), box.getWeight()));
            boxService.saveBox(box);
            return StaticData.SUCCESSES_GET_REQUEST_MESSAGE;
        } catch (Exception exception) {
            return exception.getMessage();
        }
    }

    /**
     * It handles the GET request, and it retrieves all the data in the database.
     *
     * @return List<BoxDTO> the list of objects.
     */
    @GetMapping(value = StaticData.RETRIEVE_DATA_PATH)
    public List<BoxDTO> getAll() {
        return modelMapper.entityToDto(boxService.getAll());
    }
}
