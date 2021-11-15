package edu.jy.backend.controller;

import edu.jy.backend.dto.BoxDTO;
import edu.jy.backend.exceptions.BaseException;
import edu.jy.backend.data.StaticData;
import edu.jy.backend.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.jy.backend.services.BoxService;

import java.util.List;

/**
 * The BoxController class is a REST api controller and responsible for and its methods handle the requests
 * and return responses according to the requests.
 *
 * @author Jacob Yousif
 * @version 1
 */
@CrossOrigin(origins = StaticData.LOCALHOST)
@RestController
public class BoxController {

    /**
     * A private field foe the box service object.
     */
    @Autowired
    private BoxService boxService;

    /**
     * A private field foe the model mapper object.
     */
    @Autowired
    ModelMapper modelMapper;

    /**
     * A private field foe the cost calculator object.
     */
    @Autowired
    CostCalculator costCalculator;

    /**
     * A private field foe the summary handler object.
     */
    @Autowired
    SummaryHandler summaryHandler;

    /**
     * It handles the POST requests and inserts the input into the database.
     *
     * @param dto the BoxDto object.
     * @return String
     */
    @CrossOrigin(origins = StaticData.LOCALHOST)
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
     * It handles the GET request and it retrieves all the data in the database.
     *
     * @return List<BoxDTO> the list of objects.
     */
    @GetMapping(value = StaticData.RETRIEVE_DATA_PATH)
    public List<BoxDTO> getAll() {
        return modelMapper.entityToDto(boxService.getAll());
    }

    /**
     * It returns summary of; the total cost and the total shipping weight.
     *
     * @return Summary
     */
    @GetMapping(value = StaticData.SUMMARY_PATH)
    public Summary getSummary() {
        return summaryHandler.getSummary(boxService.getAll());
    }
}
