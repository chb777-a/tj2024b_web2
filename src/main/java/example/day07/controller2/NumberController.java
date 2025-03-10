package example.day07.controller2;

import example.day07.model.dto.NumberDto;
import example.day07.service.NumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pratice/react")
@CrossOrigin("http://192.168.40.18:5175/")
public class NumberController {
    @Autowired private NumberService numberService;

    // POST
    @PostMapping("")
    public boolean onPost( @RequestBody  NumberDto numberDto){
        System.out.println("NumberController.post");
        System.out.println("numberDto = " + numberDto);
        boolean result = numberService.onPost(numberDto);
        return result;
    }

    // GET
    @GetMapping("")
    public List<NumberDto> onView(){
        System.out.println("NumberController.get");
        return numberService.onView();
    }
}
