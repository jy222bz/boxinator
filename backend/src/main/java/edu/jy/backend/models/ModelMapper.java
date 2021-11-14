package edu.jy.backend.models;

import java.util.List;
import java.util.stream.Collectors;

import edu.jy.backend.dto.BoxDTO;
import org.springframework.stereotype.Component;

/**
 * This class maps the DTO object into entity or vice versa.
 *
 * @author Jacob Yousif
 * @version 1
 */
@Component
public class ModelMapper {

    /**
     * It maps the Box object into BoxDTO object.
     *
     * @param boxes List<Box> the list of boxes.
     * @return List<BoxDTO>
     */
    public List<BoxDTO> entityToDto(List<Box> boxes) {
        return boxes.stream().map(box -> new BoxDTO(box.getId(), box.getWeight(), box.getName(), box.getColor(), box.getCountry(), box.getCost())).collect(Collectors.toList());
    }

    /**
     * It maps the BoxDTO object into Box object.
     *
     * @param boxDTO BoxDTO
     * @return Box
     */
    public Box dtoToEntity(BoxDTO boxDTO) {
        return new Box(boxDTO.getWeight(), boxDTO.getName(), boxDTO.getColor(), boxDTO.getCountry());
    }
}
