package com.wrs.services.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import com.wrs.services.domain.Item;
import com.wrs.services.domain.User;

public class Repository {

	public static Connection getConnection() throws Exception {
		Class.forName("org.postgresql.Driver");
		String url = "jdbc:postgresql://localhost:5432/WRS";
		Properties props = new Properties();
		props.setProperty("user", "postgres");
		props.setProperty("password", "postgres");
		return DriverManager.getConnection(url, props);
	}

	public static List<Item> getItems(String category) {
		List<Item> items = new ArrayList<Item>();
		try {
			Connection conn = getConnection();
			PreparedStatement st = conn.prepareStatement("Select * from wrs_user_item where category= ? ");
			st.setString(1, category);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				Item item = new Item();
				item.setItemId(rs.getInt(1));
				item.setUserName(rs.getString(2));
				item.setCategory(rs.getString(3));
				item.setSubcategory(rs.getString(4));
				item.setColor(rs.getString(5));
				item.setPattern(rs.getString(6));
				item.setSize(rs.getString(7));
				item.setStyle(rs.getString(8));
				item.setImageURL(rs.getString(9));
				items.add(item);
			}
			rs.close();
			st.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return items;
	}

	public static User getUser(String userName, String password)  {
		User user = new User();
		try {
			Connection conn = getConnection();
			PreparedStatement st = conn.prepareStatement("Select * from wrs_user where user_name= ? AND password = ? ");
			st.setString(1, userName);
			st.setString(2, password);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				user.setUserName(rs.getString(1));
				user.setPassword(rs.getString(2));
				user.setEmail(rs.getString(3));
				user.setFirstName(rs.getString(4));
				user.setLastName(rs.getString(5));
				user.setEmailFlag(rs.getString(6));
			}
			rs.close();
			st.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}

	public static User register(User user)  {

		try {
			Connection conn = getConnection();
			PreparedStatement st = conn.prepareStatement("insert into wrs_user values(?,?,?,?,?,?) ");
			st.setString(1, user.getUserName());
			st.setString(2, user.getPassword());
			st.setString(3, user.getEmail());
			st.setString(4, user.getFirstName());
			st.setString(5, user.getLastName());
			st.setString(6, user.getEmailFlag());
			st.executeUpdate();
			st.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}
	
	public static int getNextItemId()  {
		int  id=0;
		try {
			Connection conn = getConnection();
			PreparedStatement st = conn.prepareStatement("select max(user_item_id) + 1 from wrs_user_item");

			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				id = rs.getInt(1);
			}
			rs.close();
			st.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return id;
	}
	
	public static Item addItem(Item item)  {

		try {
			Connection conn = getConnection();
			PreparedStatement st = conn.prepareStatement("insert into wrs_user_item values(?,?,?,?,?,?,?,?,?,?) ");
			item.setItemId(getNextItemId());
			st.setInt(1, item.getItemId());
			st.setString(2, item.getUserName());
			st.setString(3, item.getCategory());
			st.setString(4, item.getSubcategory());
			st.setString(5, item.getColor());
			st.setString(6, item.getPattern());
			st.setString(7, item.getSize());
			st.setString(8, item.getStyle());
			st.setString(9, item.getImageURL());
			st.setString(10, item.getNotes());
			st.executeUpdate();
			st.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return item;
	}

}
