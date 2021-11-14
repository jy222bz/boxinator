package edu.jy.backend.models;

import edu.jy.backend.utility.ValueRounder;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * This class handles the summary by computing it.
 *
 * @author Jacob Yousif
 * @version 1
 */
@Component
public class SummaryHandler {


    /**
     * It computes the summary.
     *
     * @param list the list of boxes.
     * @return Summary
     */
    public Summary getSummary(List<Box> list) {
        double cost = 0;
        double weight = 0;
        for (Box box : list) {
            cost += box.getCost();
            weight += box.getWeight();
        }
        return new Summary(ValueRounder.round(cost), ValueRounder.round(weight));
    }
}
