package com.wrs.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wrs.services.domain.Item;
import com.wrs.services.domain.User;
import com.wrs.services.repository.Repository;

@RestController
public class WRSController {

    
    @RequestMapping("wrs/services/getItems")
    public List<List<Item>> getItems(@RequestParam  String category) {
    	System.out.println("Category**********************" + category);
    	List<Item> items = Repository.getItems(category);
    	int i = 0;
    	List<Item> columnItems = new ArrayList<Item>(); 
    	List<List<Item>> rowResults = new ArrayList<List<Item>>(); 
    	for(Item item:items){
    		i++;
    		columnItems.add(item); 
    		if(i % 3 == 0){
    			rowResults.add(columnItems);
    			columnItems = new ArrayList<Item>();
    		}
    	}
		if(i % 3 != 0){
			rowResults.add(columnItems);
		}
		System.out.println("size" + rowResults.size());
      	return rowResults;
      		
    }
    
    @RequestMapping(value = "wrs/services/login", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User login(@RequestBody User user) {
       return Repository.getUser(user.getUserName(),user.getPassword());

    }

    @RequestMapping(value = "wrs/services/register", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public User register(@RequestBody User user) {
		return Repository.register(user);
	}

    @RequestMapping(value = "wrs/services/addItem", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Item addItem(@RequestBody Item item) {
    	
    	item.setImageURL("partials/Images/new.jpg");
		Item newItem = Repository.addItem(item);

		return newItem;
	}

}
