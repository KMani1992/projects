package com.tasknotify.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.tasknotify.crudinterface.TaskRemainderCRUDInterface;
import com.tasknotify.crudinterface.UserCRUDInterface;
import com.tasknotify.model.LastTaskUpdRpt;
import com.tasknotify.model.Taskremaindlog;
import com.tasknotify.model.TskUpdRptUtil;
import com.tasknotify.model.Usertable;

@Service
public class TaskNotifyService {

	private final SimpleDateFormat dtFormat;
	
	private final SimpleDateFormat dtTimeFormat;
	
	

	@Autowired
	private TaskRemainderCRUDInterface taskRemaindCRUDInter;

	@Autowired
	private UserCRUDInterface userCRDUInterface;

	public TaskNotifyService() {
		dtFormat = new SimpleDateFormat("dd/MM/yyyy");
		dtTimeFormat=new SimpleDateFormat("dd/MM/yyyy hh:mm:ss a");
		
	}

	public List<Usertable> getTskNotifyUserList()
	{	
		
		List<Usertable> listUser=userCRDUInterface.findAllByOrderByLastupdatedAscIdAsc();
		
//		if(null==listUser || 0==listUser.size()){
//			install();
//		}
		
		List<Usertable> listUserData=new ArrayList<Usertable>();
		
		for(Usertable usr:listUser){
			
			if(null!=usr.getLastupdated())
			{
				usr.setLastDid(dtTimeFormat.format(usr.getLastupdated()));
				
				if(!usr.getActive().equalsIgnoreCase("N")){
					
					listUserData.add(usr);
				}
			}
		}
		
		return listUserData;
	}

	
	@Transactional
	public boolean updateTaskDone(int userId,String host) {

		Taskremaindlog tskRemaind = new Taskremaindlog();

		tskRemaind.setUser_id(userId);
		tskRemaind.setUpdatedby(userId);
		tskRemaind.setHost(host);
				
		Date currDate=new Date();
		
		tskRemaind.setLastupdated(currDate);
		
		System.out.println("currDt " + currDate);
		
		taskRemaindCRUDInter.save(tskRemaind);
		
		Usertable usrData=userCRDUInterface.findOne(userId);
		usrData.setLastupdated(currDate);
		
		userCRDUInterface.save(usrData);

		return true;
	}

	public List<LastTaskUpdRpt> getLastTaskUpdTran()
	{
		
		List<LastTaskUpdRpt> listLastTskUpd=new ArrayList<LastTaskUpdRpt>();
		
		List<Usertable> arrListUser = new ArrayList<Usertable>();

		userCRDUInterface.findAll().forEach(arrListUser::add);
		
		List<TskUpdRptUtil> arrLstlastUpdDate;
		
		LastTaskUpdRpt taskUpd;
		int lastUpdSize;
		String date;
		String detail;
		
		for(Usertable user:arrListUser)
		{	
			if(null!=user.getActive() && user.getActive().equalsIgnoreCase("N")){
				continue;
			}
			
			taskUpd=new LastTaskUpdRpt();
			
			arrLstlastUpdDate= taskRemaindCRUDInter.findLastUpdated(user.getId());
			//System.out.println("arrLstlastUpdDate " + arrLstlastUpdDate);
			
			//System.out.println("findLastUpdatedByUser_idOrderByLastupdatedAsc " + 
			//taskRemaindCRUDInter.findLastupdatedByUserIdOrderByLastupdatedAsc(user.getId()));
			
			if(null!=arrLstlastUpdDate)
			{
				lastUpdSize=arrLstlastUpdDate.size();
				
				for(int i=0;i<3;i++)
				{
					if(i<lastUpdSize)
					{					
						TskUpdRptUtil tskUpd= arrLstlastUpdDate.get(i);
						date=dtFormat.format(tskUpd.getLastUpdated());
						
						detail= null==tskUpd.getHost()?"":String.format("Host: %s",tskUpd.getHost());
						
						switch(i)
						{				
					
						case 0:
							taskUpd.setDate1(date);
							taskUpd.setDet1(detail);
							break;
						case 1:
							taskUpd.setDate2(date);
							taskUpd.setDet2(detail);
							break;
						case 2:
							taskUpd.setDate3(date);
							taskUpd.setDet3(detail);
							break;
						}
					}
				}
			}
			
			taskUpd.setUserId(user.getId());
			taskUpd.setUserName(user.getName());
			listLastTskUpd.add(taskUpd);
			
		}
		
		return listLastTskUpd;
	}
	
	
	public void install()
	{
		Usertable usrData;
		
		String [][]data={ {"Manikandan","kmanikandangce@gmail.com","9578781891","Y"},
				{"Giri","srgiri84@gmail.com","9578781891","Y"},
				{"Pandi","pandipaul93@gmail.com","9994396893","N"},
				{"Jeyasingh","jeyasingh237@gmail.com","9677015501","Y"},
				{"Raja K","ksrajacse@gmail.com","9884981281","Y"},
				{"Raja Paulsamy","rajapaul31@gmail.com","9842527571","Y"},
				{"Thaveethu","thaveethugce@gmail.com","8870619868","Y"},
				{"Yoga","sriyogarajan@gmail.com","7708833164","Y"}};
		
		for(int i=0;i<data.length;i++)
		{
			usrData=new Usertable();			
			usrData.setName(data[i][0]);
			usrData.setEmail(data[i][1]);
			usrData.setPhone(data[i][2]);
			usrData.setActive(data[i][3]);
			usrData.setLastupdated(new Date());
			try 
			{
				Thread.sleep(10);
			} catch (InterruptedException e) 
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			userCRDUInterface.save(usrData);			
		}
		
		
	}
	
	public int test(){
		
		Usertable usrData=new Usertable();
		usrData.setName("mani");
		usrData.setEmail("test");
		usrData.setPhone("123456");
		usrData.setActive("Y");
		usrData.setLastupdated(new Date());
		
		userCRDUInterface.save(usrData);
		return 0;
	}

}
