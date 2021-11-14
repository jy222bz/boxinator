package edu.jy.backend;

import edu.jy.backend.exceptions.BaseException;
import edu.jy.backend.models.CostCalculator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class CostCalculatorTests {

    private CostCalculator sut;

    @BeforeEach
    void beforeEach() {
        sut = new CostCalculator();
    }

    @Test
    void shouldThrowBaseExceptionWhenProvidingInvalidData(){
        assertThrows(BaseException.class, () -> sut.getCost("USA", 1.2));
    }

    @Test
    void shouldThrowBaseExceptionWhenProvidingInvalidWeight(){
        assertThrows(BaseException.class, () -> sut.getCost("Sweden", 0));
    }

    @Test
    void shouldCalculateTheCostForSweden() throws BaseException {
        double actual = sut.getCost("sWeden", 2);
        double expected = 2.6;
        assertEquals(expected, actual);
    }

    @Test
    void shouldCalculateTheCostForChina() throws BaseException {
        double actual = sut.getCost("CHINA", 3);
        double expected = 12;
        assertEquals(expected, actual);
    }

    @Test
    void shouldCalculateTheCostForAustralia() throws BaseException {
        double actual = sut.getCost("australia", 5);
        double expected = 36;
        assertEquals(expected, actual);
    }

    @Test
    void shouldCalculateTheCostForBrazil() throws BaseException {
        double actual = sut.getCost("BraZIL", 5);
        double expected = 43;
        assertEquals(expected, actual);
    }
}
